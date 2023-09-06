const http = require("http")

const data = {
    "What is Node.js?": "Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser. Is is single threaded Non-Blocking operation.",
    "Benefits": {
        "Fast Execution": "Node.js is built on the V8 JavaScript engine from Google, which compiles JavaScript code into native machine code. This results in fast execution, making Node.js suitable for high-performance applications.",
        "Non-Blocking and Asynchronous": "Node.js uses an event-driven, non-blocking I/O model, allowing it to handle a large number of concurrent connections without getting blocked. This is particularly useful for building real-time applications and APIs.",
        "Single Language": " Node.js allows you to use JavaScript on both the client and server sides of your application. This reduces context-switching for developers and promotes code reusability.",
        "Large Ecosystem": "Node.js has a vast ecosystem of open-source libraries and packages available through npm (Node Package Manager). This makes it easy to find and integrate third-party modules into your projects.",
        "Scalability": "Node.js is designed to be highly scalable. It can handle a large number of simultaneous connections, making it suitable for building scalable and real-time applications.",
        "Cross-Platform": " Node.js is cross-platform and can run on various operating systems, including Windows, macOS, and Linux.",
        "Great for Real-Time Applications": "Its non-blocking nature and event-driven architecture make Node.js well-suited for building real-time applications such as chat applications, online gaming, and live streaming."

    }
}
const jsond_data = JSON.stringify(data)
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.write("<html>")
        res.write("<body>")
        res.write("<h1>What is Node.js?</h1>")
        res.write("<p>Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser. Is is single threaded Non-Blocking operation.</p>")
        res.write("<h3>Benefits</h3>")
        res.write("<p>")
        res.write("<ol>")
        res.write("<li><strong>Fast Execution:</strong> Node.js is built on the V8 JavaScript engine from Google, which compiles JavaScript code into native machine code. This results in fast execution, making Node.js suitable for high-performance applications.</li>")
        res.write("<li><strong>Non-Blocking and Asynchronous:</strong> Node.js uses an event-driven, non-blocking I/O model, allowing it to handle a large number of concurrent connections without getting blocked. This is particularly useful for building real-time applications and APIs.</li>")
        res.write("<li><strong>Single Language:</strong>  Node.js allows you to use JavaScript on both the client and server sides of your application. This reduces context-switching for developers and promotes code reusability.</li>")
        res.write("<li><strong>Large Ecosystem:</strong> Node.js has a vast ecosystem of open-source libraries and packages available through npm (Node Package Manager). This makes it easy to find and integrate third-party modules into your projects.</li>")
        res.write("<li><strong>Scalability:</strong> Node.js is designed to be highly scalable. It can handle a large number of simultaneous connections, making it suitable for building scalable and real-time applications.</li>")
        res.write("<li><strong>Cross-Platform:</strong> Node.js is cross-platform and can run on various operating systems, including Windows, macOS, and Linux.</li>")
        res.write("<li><strong>Great for Real-Time Applications:</strong>  Its non-blocking nature and event-driven architecture make Node.js well-suited for building real-time applications such as chat applications, online gaming, and live streaming.</li>")
        res.write("</li>")
        res.write("</p>")
        res.write("</body>")
        res.write("</body>")
        res.end()
    } else if (req.url == "/fetchdata") {
        res.write(jsond_data)
        res.end()
    }
})

const port = 3000
server.listen(port, () => {
    console.log(`server is running on ${port}`);
})