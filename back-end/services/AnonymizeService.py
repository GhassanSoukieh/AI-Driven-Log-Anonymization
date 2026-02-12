from presidio_analyzer import AnalyzerEngine
from presidio_anonymizer import AnonymizerEngine
import zipfile
import io



class AnonymizeService:
    
    def __init__(self):
        self.analyzer = AnalyzerEngine()
        self.anonymizer = AnonymizerEngine()
        
    
    def anonymize(self, text):
        results = self.analyzer.analyze(text , language='en')
        targeted_text = self.anonymizer.anonymize(text, analyzer_results=results)
        return targeted_text
    
    
    def handle_ZIP_files(self, zip_file_path):
        found_logs = {}
        
        with zipfile.ZipFile(zip_file_path, 'r') as zip:
            for file in zip.namelist():
                with zip.open(file) as f:
                    try: 
                        content = f.read().decode('utf-8')
                        anonymized_content = self.anonymize(content)
                        found_logs[file] = anonymized_content.text
                        
                    except Exception as e:
                        print(f"Error processing file {file}: {e}")
        
        

       
    
    