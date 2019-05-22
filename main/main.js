module.exports = function main(inputs) {
    // write your code here...
    var price=0;
	price=inputs.parkTime*0.25+6;
	dis=inputs.distance;
	if(dis>2&&dis<=8)
	{
		price+=(dis-2)*0.8;
	}
	else if(dis>8)
    {
		price=price+4.8+(dis-8)*1.2;
	}
	price=Math.round(price);
	return price;
};
