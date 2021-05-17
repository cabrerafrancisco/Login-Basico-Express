# Login-Basico-Express
Ejercicio de Login para aprender la comunicacion cliente-servidor

**Consigna** 

Lo que les propongo es hacer un login y registro básicos. Consta de:
 -Pantalla de login (formulario + link para registrarse)
 -Pantalla de registro (formulario)
 -"Home", pantalla cuando ya ingresamos correctamente (solo un mensaje de bienvenida)
Son 3 HTML y el JS del server, aunque sería bueno que le agreguen sus CSS a las vistas para estilarlos.
Consideraciones:
1. Les dejo un diagrama que puede parecer complicado pero creo que sirve mucho de guía. Mírenlo bien antes de empezar.
2. Les paso también el archivo por si quieren jugar con la app diagrams.net (ex draw.io)
3. Aunque por ahora todos los endpoints retornan HTML, está aclarado igual ahí
4. Algunos endpoints tienen dos respuestas posibles, una cuando se resuelve bien y otra cuando hay algún problema (por ejemplo, password erróneo). Las respuestas están diferenciadas por color.
5. La lista de users y passwords está en un array en el server. Por ahora usemos un array local "users" declarado en el código de nuestro server (inicialmente vacío o con usr/pwd precargados por uds. para probar).
6. Cuando se recibe el form post del login se validan usr y pwd contra esa lista. Si está ok vamos al home, si no volvemos a poner la pantalla de login.
7. Cuando se recibe el form post de registro se valida:
	a. que el usr no exista
	b. que el pwd y su repetición coincidan.
8. Si valida bien, se guarda el nuevo usuario en el array (push) y se vuelve a enviar la pantalla de login. Si hay algún error se vuelve a enviar la pantalla de registro.

9. Recuerden que lo que se envía en los forms queda en el req.body (y que necesitan configurar el express.urlencoded para que esté)

Observen todas las anotaciones que dejé en el diagrama, para que entiendan bien qué se está generando en cada caso. Cuando hagan pruebas también tengan la solapa Network del devTools abierta y vayan observando qué tipo de requests/responses se generan.