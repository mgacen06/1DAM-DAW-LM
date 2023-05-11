<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <!-- En este match ponemos la etiqueta raiz-->
    <xsl:template match="plantilla">
        <html>
            <head>
                <link href="fichero.css"/>
            </head>
            <body>
                <main>
                    <!-- BUCLE 
                    /plantilla/jugador
                    -->
                    <!-- En este select ponemos la etiqueta que va a ser recorrida varias veces-->
                    <xsl:for-each select="jugador">
                        <div class="card">
                            <!-- EN CADA INTERROGACION DEBEMOS TENER EL VALOR DEL ELEMENTO -->
                            <!-- /plantilla/jugador/name/text() -->
                            <!-- En esto select ponemos la etiqeuta dentro de la del for each de la que capturamos datos -->
                            <p>Nombre: <xsl:value-of select="name/text()"/></p>
                            <p>Apellidos: <xsl:value-of select="apellido1/text() | apellido2/text()"/></p>
                            <p>DNI: <xsl:value-of select="dni/text()"/></p>
                            <p>Pais: <xsl:value-of select="pais/text()"/></p>
                            <p>Fecha de nacimiento: <xsl:value-of select="fechaNacimiento/text()"/></p>
                            <p>Mundiales: <xsl:value-of select="numMundiales/text()"/></p>
                        </div>
                        <hr/>
                    </xsl:for-each>
                </main>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>