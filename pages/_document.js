// cette page est utilisée pour augmenter les balises <html> et <body> de notre app.
// c est necessaire car next.js ignorent la définition du balisage du document environnant.

// ce qui est importé est présent dans le render()
// suite a cela on redemarre notre serveur 

import Document, {Html, Head, Main, NextScript} from "next/document"


class MyDocument extends Document{
    render(){
        return(
            <Html>
                <Head>
                <link rel="stylesheet"
                 href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
                </Head>
                <body>
                   <Main/>
                   <NextScript/>
                </body>
            </Html>
        );
    }
}
export default MyDocument

// notre fichier document nous permets egalement d'importer nos stylesheet
// on importe dans notre balise <Head> le cdn de bootstrap css
// nous l 'importons ensuite dans notre index.js
