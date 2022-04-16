# the purpose of this script is to replace all instances of './' found in href or src attributes with 
# /rock-paper/scissors/

import imp
import string
from bs4 import BeautifulSoup
import re

with open('index.html', 'r') as myFile:

    doc = BeautifulSoup(myFile, 'html.parser')

result = doc.find_all(href=True) + doc.find_all(src=True)
print(doc.prettify())
# print(result)

# for tag in result:
#     if re.search('./*', str(result)):
#         x = str(tag["href"]).replace('\./', '/rock-paper-scissors/') 