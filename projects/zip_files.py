import shutil, json, os, time, random

startTime = time.time()

def timeTaken():
    return time.time() - startTime

def main_logger(func):
    def main_wrapper():
        logging(thread="process", loggerSays=rf"{func.__name__} Started")
        func()
        logging(thread="process", loggerSays=rf"{func.__name__} Finished in {timeTaken()} Seconds")
    return main_wrapper

def logging(thread: dict, loggerSays: str, printType: str = "info"):
    print(f"[00:00:{round(timeTaken(), 2)}] [{thread}/{printType}] {loggerSays}")

def localFiles():
    return os.path.dirname(os.path.realpath(__file__))

def zipper(nameZip, versionZip):
    logging(thread="zip", loggerSays=rf"Starting to ZIP file {nameZip}")
    shutil.make_archive(base_name = f"{nameZip}_{versionZip}", format = "zip", root_dir = fr"{localFiles()}/{nameZip}")
    #time.sleep(random.randint(1, 5)+random.randint(1, 5)*0.1+random.randint(1, 5)*0.7) 
    # for dev purposes so you dont make 1.5e^38 zip files by running this script repeatedly
    logging(thread="zip", loggerSays=rf"Finished ZIPing file {nameZip}")

@main_logger
def main():
    if bool(os.path.exists(localFiles() + r"\versioning.json")) != True:
        logging(thread="Compile", 
                printType="error",
                loggerSays=rf"{localFiles()}\versioning.json not found. Please create file.")
    else:
        with open(localFiles()+r"\versioning.json", "r") as f:
            jsonText =json.load(f)
        for key in jsonText:
            values = jsonText[key]
            logging(thread=__name__.strip("_"), loggerSays=f"JSON settings for {key}: {values}")
            zipper(nameZip=key, versionZip=values["version"])
    
if __name__ == "__main__":
    main()
