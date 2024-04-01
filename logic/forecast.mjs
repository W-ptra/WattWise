export function forecast(total_watt,price_per_kwh,period){

    const hour = total_watt*price_per_kwh;
    const day = total_watt*price_per_kwh*period;
    const week = day*7;
    const month = day*30;
    const year = day*365;

    const result = {
        hour,day,week,month,year
    }

    return result;
}