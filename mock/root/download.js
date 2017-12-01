module.exports = {
    disabled: 0,
	headers:{
		'Content-Disposition': 'attachment;filename=bill.xls',
		'Content-Type': 'application/vnd.ms-excel;charset=utf-8'
	},
    body: '<html><body><table border="1"><tr><th>Month</th><th>Amount</th></tr><tr><td>Sep</td><td>123.45</td></tr></table></body></html>'
}
