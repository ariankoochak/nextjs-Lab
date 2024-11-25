import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";




export default function PageChart({last7DaysArray , valuesArray,title}) {
    const options = {
        chart: {
            type: "column",
        },
        title: {
            text: title,
        },

        accessibility: {
            point: {
                valueDescriptionFormat: "{xDescription}{separator}{value}",
            },
        },

        xAxis: {
            title: {
                text: "Date",
            },
            categories: last7DaysArray,
        },

        yAxis: {
            type: "logarithmic",
            title: {
                text: "Number of view",
            },
        },

        tooltip: {
            headerFormat: "<b>{series.name}</b><br />",
            pointFormat: "{point.y}",
        },

        series: [
            {
                name: "Views",
                keys: ["y"],
                data: valuesArray,
                color: {
                    linearGradient: {
                        x1: 0,
                        x2: 0,
                        y1: 1,
                        y2: 0,
                    },
                    stops: [[0, "#0000ff"]],
                },
            },
        ],
    };

    console.log(valuesArray);
    

    return (
        <>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </>
    );
}
