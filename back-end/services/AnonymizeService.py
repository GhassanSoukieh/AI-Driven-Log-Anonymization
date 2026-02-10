from presidio_analyzer import AnalyzerEngine
from presidio_anonymizer import AnonymizerEngine



class AnonymizeService:
    
    def __init__(self):
        self.analyzer = AnalyzerEngine()
        self.anonymizer = AnonymizerEngine()
        
    
    def anonymize(self, text):
        results = self.analyzer.analyze(text , language='en')
        targeted_text = self.anonymizer.anonymize(text, analyzer_results=results)
        return targeted_text
        

       
    
    