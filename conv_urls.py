import re
import urllib.parse 

def convert(m):
    return m.group(1) + urllib.parse.quote_plus(m.group(2))

with open('morfologia.Rmd','r') as f:
    text = f.read()

newtext = re.sub('(http.*wiki/)([а-яё]+)', convert, text)
while re.search('(http.*wiki/)([а-яё]+)',newtext):
    newtext = re.sub('(http.*wiki/)([а-яё]+)', convert, newtext)

with open('morfologia.Rmd','w') as f:
    f.write(newtext)
