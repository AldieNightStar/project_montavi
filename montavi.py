#!/bin/env python

import shutil
import sys
import os.path

USAGE = """USAGE:
    montavi.py new name
"""

DIR = os.path.dirname(os.path.realpath(__file__))

def createProj(name):
    shutil.copytree(DIR, "./" + name)

def main(args):
    it = iter(args)
    op = next(it, None)
    if op == "new":
        projname = next(it, None)
        if projname == None:
            print("[!] Name not specified")
            return
        createProj(projname)
        print("OK")
        return
    else:
        print(USAGE)
        return


if __name__ == "__main__":
    args = sys.argv[1:]
    if len(args) < 1:
        print(USAGE)
    else:
        main(args)