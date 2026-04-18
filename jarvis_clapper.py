import sounddevice as sd
import numpy as np
import time
import os
import webbrowser

# ========================================================
# CONFIGURAÇÕES DO JARVIS_CLAP (V2 - Anti Voz)
# ========================================================
# Aumentei para 25.0. Sua voz normal bate na casa dos 15. 
# Para bater 25, vai ter que ser uma palma estalada ou um ruído seco.
THRESHOLD = 25.0  
CLAP_INTERVAL_MIN = 0.2
CLAP_INTERVAL_MAX = 0.9
COOLDOWN_TIME = 10.0 # Trava de segurança de 10s pra não engasgar o pc

claps = 0
last_clap_time = 0
last_execution_time = 0

def greet_arthur():
    # Isso faz o próprio computador falar a resposta por voz de fundo!
    codigo_voz = """
    Add-Type -AssemblyName System.Speech;
    $synth = New-Object System.Speech.Synthesis.SpeechSynthesizer;
    $synth.SelectVoiceByHints('Female', 'NotSet', 'NotSet', 'pt-BR');
    $synth.Speak('Bom dia, senhor Arthur. Laboratório iniciado. Como posso servi-lo hoje?');
    """
    os.system(f'powershell -Command "{codigo_voz}"')

def open_my_lab():
    global last_execution_time
    print("\n👏🏽👏🏽 Dupla Palma Identificada! Iniciando o Protocolo de Laboratório...")
    
    # 1. Abrir a música pedida
    webbrowser.open("https://www.youtube.com/watch?v=XgWUDbYfNe4&list=RDXgWUDbYfNe4&start_radio=1")
    
    # 2. Abrir o Dashboard do Jarvis para você falar com ele
    time.sleep(1)
    webbrowser.open("http://localhost:3142/")
    
    # 3. Abrir Obsidian
    os.system('start obsidian://')
    
    # 4. Voz do Jarvis te saudando localmente
    greet_arthur()
    
    last_execution_time = time.time()
    print("▶ Protocolo bloqueado por 10s para não repetir. Bom trabalho, Arthur!\n")

def audio_callback(indata, frames, time_info, status):
    global claps, last_clap_time
    
    # Se ainda estiver no cooldown de 10s, ignora absolutamente tudo
    if time.time() - last_execution_time < COOLDOWN_TIME:
        return
        
    volume_norm = np.linalg.norm(indata)*10
    
    if volume_norm > 1.0:
        bar = "|" * int(min(volume_norm, 50))
        print(f"🎤 {volume_norm:.1f} {bar}     ", end="\r")
        
    if volume_norm > THRESHOLD:
        current_time = time.time()
        time_diff = current_time - last_clap_time
        
        if 0.15 < time_diff < CLAP_INTERVAL_MIN:
            pass
        elif time_diff <= CLAP_INTERVAL_MAX:
            claps += 1
            last_clap_time = current_time
            if claps == 2:
                open_my_lab()
                claps = 0 
        else:
            claps = 1
            last_clap_time = current_time

print("🎤🤖 Jarvis Automator V2 (Anti-Voz) Ativado!")
print("Aguardando seu sinal EXCLUSIVO de palmas altas... (Pressione Ctrl+C para encerrar).")

try:
    with sd.InputStream(callback=audio_callback):
        while True:
            time.sleep(1)
except Exception as e:
    print(f"Erro: {e}")
