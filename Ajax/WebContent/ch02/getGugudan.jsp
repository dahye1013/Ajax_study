<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
-------------자바문법---------------<br>
<%
	int dan = Integer.parseInt(request.getParameter("dan"));

		for (int i = 1; i < 10; i++) {
			out.println(dan + "*" + i + "=" + dan * i);
			out.println("<br>");
		}
%>

-------------c태그---------------<br>
<c:forEach var="i" begin="1" end="9" step="1">
	${param.dan}*${i}=${param.dan*i} <br> 
</c:forEach>