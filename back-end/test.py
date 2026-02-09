from services.anonymize_service import anonymize_service

anonymize = anonymize_service()

text = "My name is John Doe and my email is ghassan@gmail.com"

results = anonymize.annonymize(text)

print(f"The text was {text}  and the results is {results}" )




