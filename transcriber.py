import assemblyai as aai

aai.settings.api_key = "3852cdfd5575446487db8b9b621dbd5a"
file = '' #the input file from the user
transcriber = aai.Transcriber()
transcript = transcriber.transcribe(file)

# print(transcript.text)
txt = transcript.text  #transcribed text