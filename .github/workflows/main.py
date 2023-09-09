from enumerate import enumerate

folder = "./exercices"

i = enumerate(folder)

html = """
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Exercices</title>
        </head>
        <body>
        """
html += str(i)

html += """
        </body>
        </html>
        """

f = open("./../../exercices.html", "w")
print(html)
f.write(html)
f.close()