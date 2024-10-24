import React from 'react';
import Playwright_img_1 from '../../../assets/images/playwright_test_5.JPG';
import Playwright_img_2 from '../../../assets/images/playwright_test_100.JPG';

const Playwright_Project = () => {
    return (
        <div>
            <h1>Playwright Testing - Quality Assuance (QA)</h1>
            <h3>Project Overview</h3>
            <p>
                While applying for jobs, I encountered a Quality Assurance position that had a coding assessment. By utilizing Playwright, a QA software, the code I wrote navigates to Hackernews.com/articles and validates a given number (x) of articles are listed from oldest to newest.
            </p>
            <h3>Technologies Used</h3>
            <p>Playwright, JavaScript, GitHub for version control.</p>
            <h3>Challenges and Solutions</h3>
            <p>I needed to handle pagination to avoid overloading the browser with more than 30 articles because Hackernews displays 30 articles per page. By implementing pagination handling, I ensured the data was loaded in manageable chunks without missing any entries.</p>
            <h3>Results</h3>
            <p>The automation process efficiently verified that the articles on Hackernews.com were correctly sorted from oldest to newest, ensuring data integrity and enhancing user experience. The code is designed to be flexible, capable of verifying any number of articles, and can be easily reused for future QA tasks to automate article sorting validation.</p>
            <h3>Code (available on GitHub)</h3>
            <pre>
                <code>{`
// import packages test, expect
const { test, expect } = require('@playwright/test');

// helper function
function areDatesSorted(dates) {
    for (let i = 0; i < dates.length - 1; i++) {
        if (dates[i] < dates[i + 1]) {
            console.log('The following pair of times were found not in order: ' + dates[i] + " and " + dates[i + 1]);
            return false; // Found a pair that is not in order
        }
    }
    console.log('test passed');
    return true; // All dates are in order
}

// write a test
test('testName', async ({ page }) => {
    // navigate to a website
    await page.goto('https://news.ycombinator.com/newest');
    // Get locators
    var timestampLocators = page.locator('span.age');
    ...`}</code>
            </pre>
            <h3>Display</h3>
            <img src={Playwright_img_1} alt="Playwright Image 1" />
            <p>Console output showing the successful verification of the first 5 articles on Hacker News, confirming they are listed in the correct order from newest to oldest.</p>
            <img src={Playwright_img_2} alt="Playwright Image 2" />
            <p>Console output displaying the verification of 100 articles on Hacker News, validating that the entire set is correctly sorted from newest to oldest, ensuring accurate chronological order.</p>
            <h3>Reflection</h3>
            <p>As my first QA experience, this project introduced me to automated testing with Playwright. I learned how to handle real-world QA challenges, like data validation and efficiency. It gave me a solid understanding of how QA improves software reliability and sparked my interest in testing.</p>
        </div>
    );
};

export default Playwright_Project;
