import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/jodi.css";
import Logo from "./Logo"
import Footer from "./fotter"

const Jodi = () => {
    const { id } = useParams(); // Get the ID from the URL
    const [lotteryData, setLotteryData] = useState(null); // State to store the fetched data
    const [loading, setLoading] = useState(true); // State to manage loading
    const [error, setError] = useState(null); // State to manage errors

    useEffect(() => {
        const fetchLotteryData = async () => {
            try {
                const response = await fetch(`http://localhost:4000/lottery/${id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch lottery data");
                }
                const data = await response.json();
                setLotteryData(data); // Set the fetched data
                setLoading(false); // Set loading to false once data is fetched
            } catch (error) {
                setError(error.message); // Set error message
                setLoading(false); // Set loading to false if an error occurs
            }
        };

        fetchLotteryData();
    }, [id]); // Re-run when ID changes

    const isResultDoubleDigits = (result) => {
        return result?.length === 2 && result[0] === result[1];
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!lotteryData) {
        return <div>No data found for ID: {id}</div>;
    }

    return (
        <div>
            <div className="">
                <Logo/>
            </div>
            <div class="container-fluid">
		<div>
<h1 class="chart-h1">{lotteryData.name} JODI CHART </h1>
<div class="para3">
<h2 >{lotteryData.name} JODI RESULT CHART RECORDS </h2>
<p >Dpboss KALYAN {lotteryData.name} chart, KALYAN {lotteryData.name} chart, old KALYAN {lotteryData.name} chart, KALYAN MORNING pana patti chart, dpboss KALYAN MORNING, KALYAN {lotteryData.name} record, KALYAN {lotteryData.name} record, KALYAN {lotteryData.name} chart 2015, KALYAN {lotteryData.name} chart 2012, KALYAN {lotteryData.name} chart 2012 to 2023, KALYAN MORNING final ank, KALYAN {lotteryData.name} chart.co, KALYAN {lotteryData.name} chart matka, KALYAN {lotteryData.name} chart book, KALYAN MORNING matka chart, matka panel chart KALYAN MORNING, matka KALYAN MORNING chart, satta KALYAN MORNING chart panel, KALYAN MORNING state chart, KALYAN MORNING chart result, डीपी बॉस, सट्टा चार्ट, सट्टा मटका पैनल चार्ट, सट्टा मटका पैनल चार्ट, कल्याण मॉर्निंग मटका पैनल चार्ट, सट्टा मटका कल्याण मॉर्निंग चार्ट पैनल, कल्याण मॉर्निंग सट्टा चार्ट, कल्याण मॉर्निंग पैनल चार्ट</p>
</div>

<div class="chart-result">    
		<div>{lotteryData.name}</div>
		<span>{lotteryData.leftNo}-{lotteryData.midNo}-{lotteryData.rightNo}</span><br/>
		<a href="javascript:location.reload()">Refresh Result</a>
</div>
	
<div id="top"></div>
<a href="#bottom" class="button2"> Go to Bottom </a>

<div className="pannel panel-info">
                <div className="panel-heading">
                    <h3> {lotteryData.name} MATKA JODI RECORD 2019 - 2024</h3>
                </div>

                <div className="panel-body">
                    <table className="panel-chart chart-table" cellPadding="2">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Mon</th>
                                <th>Tue</th>
                                <th>Wed</th>
                                <th>Thu</th>
                                <th>Fri</th>
                                <th>Sat</th>
                                <th>Sun</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lotteryData.weeklyResults.map((result, index) => (
                                <tr key={index}>
                                    <td>{result.week}</td>
                                    {Object.keys(result.data).map((day, i) => {
                                        const dayData = result.data[day];
                                        const shouldHighlight = isResultDoubleDigits(dayData.result);

                                        return (
                                            <td key={i}>
                                                <div
                                                    className={`lottery ${
                                                        shouldHighlight ? "highlight-red" : ""
                                                    }`}
                                                >
                                                    <div className="mid"><h1>{dayData.result}</h1></div>
                                                </div>
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="chart-result">    
		<div>{lotteryData.name}</div>
		<span>{lotteryData.leftNo}-{lotteryData.midNo}-{lotteryData.rightNo}</span><br/>
		<a href="javascript:location.reload()">Refresh Result</a>
</div>
<div class="container-fluid footer-text-div">
<p>DPBoss Services is a renowned platform that provides comprehensive and accurate information on {lotteryData.name} Panel Chart Records. As a trusted name in the world of online gaming and gambling, DPBoss has carved a niche for itself by delivering reliable and up-to-date data to enthusiasts seeking Milan {lotteryData.name} charts.</p>
<p>{lotteryData.name} Panel Chart Records serve as crucial tools for players and bettors looking to analyze trends and patterns in the {lotteryData.name} market. DPBoss understands the significance of this data in making informed decisions and strives to offer a user-friendly interface for easy navigation through the {lotteryData.name} Chart Records. DPBoss Services stands as a trustworthy companion for {lotteryData.name} enthusiasts, offering a seamless experience and valuable insights through its {lotteryData.name} Panel Chart Records section.</p>
<br/>
<div class="small-heading">{lotteryData.records} ONILINE</div>
<p>{lotteryData.des3}</p>
<br/>
<div class="faq-heading">Frequently Asked Questions (FAQs) For {lotteryData.records}:</div>
<p class="faq-title">Q1: How frequently are the {lotteryData.name} Panel Chart Records updated?</p>
<p class="faq-ans">We understand the importance of real-time data in the world of online gaming. Our {lotteryData.name} Panel Chart Records are updated regularly to ensure that you have access to the latest information. You can rely on DPBoss to keep you informed about the ever-changing dynamics of the game.</p>
<p class="faq-title">Q2: Is there any cost associated with accessing the {lotteryData.name} Panel Chart Records on DPBoss?</p>
<p class="faq-ans">No, accessing the {lotteryData.name} Panel Chart Records on DPBoss is absolutely free. We believe in providing a transparent and accessible platform for enthusiasts and players alike. Simply visit our website, and you can explore the comprehensive charts without any hidden charges.</p>
</div><br/>
<center>
	<div id="bottom"></div>
	<a href="#top" class="button2"> Go to Top </a>
</center>
{/* <p>
144</p> */}
<Footer/>

</div>
</div>

            
        </div>
         );
};

export default Jodi;