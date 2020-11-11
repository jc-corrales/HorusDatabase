"use strict";

var conn = $.hdb.getConnection();
var query = 
`SELECT FROM "0659EE1FDCC34663912F50FD5F1D8464"."HorusDatabase.db.data.ORDENESDESALIDA::ORDENESDESALIDA.ITEM" {
	"IDITEM"
	"ORDENESDESALIDA.HEADER.IDORDENDESALIDA"
	"INSUMOS.ITEM.IDINSUMO"
	"CANTIDADREQUERIDA"
	"OBSERVACIONES"
	"ESTADOENVIO"
	"ORIGEN"
	"DESTINO"}`;
	var rs = conn.executeQuery(query);
	$response.setBody(JSON.stringify(rs));
	$response.contentType = "application/json";
	$response.status = $net.http.OK;