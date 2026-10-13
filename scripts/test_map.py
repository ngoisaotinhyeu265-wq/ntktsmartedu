import json

with open('missing_words.json') as f:
    words = json.load(f)

print(f"Total words to map: {len(words)}")
