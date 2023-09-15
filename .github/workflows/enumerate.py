import ftplib
import os
import ftplib

class Module:
    def __init__(self, number, exercises):
        self.number = number
        self.exercices = exercises

    def __str__(self):
        return f"Module: {self.number} [{self.exercices}]"

def enumerate(folder):
    subfolders = [ f.path for f in os.scandir(folder) if f.is_dir() ]
    # exercices = [Module(i + 1, sorted([ f.path.split("/")[-1].replace("ex", "") for f in os.scandir(subfolders[i]) if f.is_dir() ])) for i in range(len(subfolders))]
    exercices = [Module(subfolders[i].split("/")[-1], sorted([ f.path for f in os.scandir(subfolders[i]) if f.is_dir() ])) for i in range(len(subfolders))]
    print(exercices[0])
    return exercices