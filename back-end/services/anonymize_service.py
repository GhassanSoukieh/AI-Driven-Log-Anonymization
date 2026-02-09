from presidio_analyzer import AnalyzerEngine
from presidio_anonymizer import AnonymizerEngine



class anonymize_service:
    
    def __init__(self):
        self.analyzer = AnalyzerEngine()
        self.anonymizer = AnonymizerEngine()
        
    
    def annonymize(self, text):
        results = self.analyzer.analyze(text , language='en')
        targeted_text = self.anonymizer.anonymize(text, analyzer_results=results)
        return targeted_text
        

       
    
    