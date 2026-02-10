from services.AnonymizeService import AnonymizeService

anonymize = AnonymizeService()

text = "My name is John Doe and my email is ghassan@gmail.com"

results = anonymize.anonymize(text)

print(f"The text was {text}  and the results is {results}" )




