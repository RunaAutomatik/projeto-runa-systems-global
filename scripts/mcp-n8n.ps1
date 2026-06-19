$ErrorActionPreference = "Stop"

$projectRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
$envPath = Join-Path $projectRoot ".env"

if (-not (Test-Path $envPath)) {
  Write-Error "Missing .env file at $envPath"
  exit 1
}

foreach ($rawLine in Get-Content $envPath) {
  $line = $rawLine.Trim()
  if ($line.Length -gt 0 -and -not $line.StartsWith("#")) {
    $separator = $line.IndexOf("=")
    if ($separator -gt 0) {
      $name = $line.Substring(0, $separator).Trim()
      $value = $line.Substring($separator + 1).Trim()

      if (
        ($value.StartsWith('"') -and $value.EndsWith('"')) -or
        ($value.StartsWith("'") -and $value.EndsWith("'"))
      ) {
        $value = $value.Substring(1, $value.Length - 2)
      }

      [Environment]::SetEnvironmentVariable($name, $value, "Process")
    }
  }
}

if (-not $env:N8N_API_KEY) {
  Write-Error "N8N_API_KEY is not set in .env"
  exit 1
}

if (-not $env:N8N_BASE_URL) {
  Write-Error "N8N_BASE_URL is not set in .env"
  exit 1
}

& npx -y n8n-mcp
exit $LASTEXITCODE
