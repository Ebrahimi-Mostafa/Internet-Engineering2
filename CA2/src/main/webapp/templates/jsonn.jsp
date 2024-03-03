<%@include file="header.jsp" %>


<h1>JSON JSON JSON</h1>

<% String message = (String) request.getAttribute("message"); %>



<p>Message from the servlet: <%= message %></p>

<%-- Using JSP EL --%>
<p>Message from the servlet: ${message}</p>

<h2>
    <%= obj.getString("name1") %>
</h2>


<h3>
    <%= obj.toString() %>
</h3>

<pre id=account class=json-container></pre>

<%@include file="scripts.jsp" %>

<script src=https://cdn.jsdelivr.net/npm/pretty-print-json@2.1/dist/pretty-print-json.min.js></script>

<script>
    const data = { active: true, mode: '🚃', codes: [48348, 28923, 39080], city: 'London' };
    const elem = document.getElementById('account');
    elem.innerHTML = prettyPrintJson.toHtml(<%= obj.toString() %>);
</script>

<script>
    console.log("salam");
    const obj = JSON.parse('<%= obj.toString() %>');
    console.log(obj);
</script>

<%@include file="footer.jsp" %>