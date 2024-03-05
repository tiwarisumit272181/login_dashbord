
        // JavaScript code for bar chart goes here
        let data1=  [
            { country: "Socila Cicle", population: 14500 },
            { country: "Malia", population: 13000 },
            { country: "Snohomish", population: 6300 },
            { country: "New Yokr", population: 5900 },
            { country: "Everett", population: 2500 },
            { country: "Seattle", population: 2200 },
            { country: "London", population: 1200 },
          
        ];

        let data2 = [
            { country: "Alarm System", population: 30000 },
            { country: "Backflow Testing", population: 17000 },
            { country: "Diagnosis", population: 6300 },
            { country: "Fire Extinguisher", population: 5900 },
            { country: "Pump", population: 1000 },
        ];

        function createBarChart(data, containerId) {
    let barChart = function module() {
        // Chart code for bar chart
        const margin = { top: 20, right: 20, bottom: 50, left: 100 }; // Increased bottom margin for x-axis labels
        const width = 600 - margin.left - margin.right;
        const height = 400 - margin.top - margin.bottom;
        let svg;

        function exports(_selection) {
            _selection.each(function (_data) {
                const yDomain = _data.map((d) => +d.population);
                const xDomain = _data.map((d) => d.country);

                const yScale = d3
                    .scaleBand()
                    .domain(xDomain)
                    .range([0, height])
                    .padding(0.5);

                const xScale = d3
                    .scaleLinear()
                    .domain([0, Math.max.apply(null, yDomain)])
                    .range([0, width]);

                if (!svg) {
                    svg = d3.select(this).append("svg")
                        .attr("preserveAspectRatio", "xMinYMin meet")
                        .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
                        .classed("svg-content", true)
                        .append("g")
                        .attr("transform", `translate(${margin.left}, ${margin.top})`);
                }

                let container = svg;

                container.selectAll("*").remove(); // Clear previous contents

                container.append("g").classed("bars", true);
                container.append("g").classed("x-axis axis", true);
                container.append("g").classed("y-axis axis", true);

                container.selectAll(".grid-line")
                    .data(_data)
                    .enter()
                    .append("line")
                    .attr("class", "grid-line")
                    .attr("x1", function (d) { return xScale(d.population); })
                    .attr("y1", 0)
                    .attr("x2", function (d) { return xScale(d.population); })
                    .attr("y2", height)
                    .style("stroke", "gray")
                    .style("stroke-opacity", 0.5)
                    .style("stroke-dasharray", "2,2");

                container.append("g").call(d3.axisLeft(yScale));
                container.append("g")
                    .attr("transform", `translate(0, ${height})`)
                    .call(d3.axisBottom(xScale));

                let bars = container.select(".bars")
                    .selectAll(".bar")
                    .data(_data, function (d) {
                        return d.country;
                    });

                // add/update
                bars.enter()
                    .append("rect")
                    .classed("bar", true)
                    .attr("x", "0")
                    .attr("y", (d) => yScale(d.country))
                    .attr("width", (d) => xScale(d.population))
                    .attr("height", (d) => yScale.bandwidth())
                    .style("fill", "#EE5566");

                // remove
                bars.exit().remove();
            });
        }

        return exports;
    };

    let chart = barChart();
    d3.select(containerId).datum(data).call(chart);
}

        // Render charts
        createBarChart(data1, "#chart1");
        createBarChart(data2, "#chart2");
        function validateForm() {
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;

            // Email validation
            var emailRegex = /\S+@\S+\.\S+/;
            if (!emailRegex.test(email)) {
                alert("Please enter a valid email address.");
                return false;
            }

            // Password validation
            var passwordRegex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@]+$/;
            if (!passwordRegex.test(password)) {
                alert("Password must contain an uppercase letter, a number, and only '@' as a special character.");
                return false;
            }
            if(emailRegex.test(email) && passwordRegex.test(password)){
                window.location.href = "dashboard.html";
            } else {
                alert("Incorrect password.");
            }
        }

        document.getElementById("forgotPassword").addEventListener("click", function() {
            window.open("mailto:support@zentrades.pro");
        });
  
