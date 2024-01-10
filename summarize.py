from transformers import PegasusForConditionalGeneration, AutoTokenizer
import torch
from transcriber import txt as transcribed_text  # import txt variable from transcriber.py

model_name = 'google/pegasus-cnn_dailymail'
device = 'cuda' if torch.cuda.is_available() else 'cpu'
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = PegasusForConditionalGeneration.from_pretrained(model_name).to(device)
batch = tokenizer(transcribed_text, truncation=True, padding='longest', return_tensors="pt").to(device)
translated = model.generate(**batch)
tgt_text = tokenizer.batch_decode(translated, skip_special_tokens=True)

print(tgt_text)
