document.addEventListener('DOMContentLoaded',() => {
    chrome.storage.local.get(['researchNotes'], function(result) {
        if(result.researchNotes) {
            document.getElementById('notes').value = result.researchNotes;
        } 
    })}
);

document.getElementById('summarize-Btn').addEventListener('click',summarizeText);
document.getElementById('suggest-Btn').addEventListener('click',suggestion);
document.getElementById('saveNotes-Btn').addEventListener('click',saveNotes);


async function summarizeText() {
    try {
        const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
        const [{result}] = await chrome.scripting.executeScript({
            target: {tabId: tab.id},
            func: () => {
                const selection = window.getSelection();
                return selection.toString();
            }
        });

        if (!result) {
            alert('Please select some text to summarize.');
            return;
        }

        const response = await fetch('http://localhost:12345/api/research/process', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: result,
                operation: 'Summarize'
            })
        });

        if (!response.ok) {
            throw new Error('API Error: ' + response.statusText);
        }

        const data = await response.json();
        showResult(data.result.replace(/\n/g, '<br>'));

    }
    catch(error) {
        showResult('Error: ' + error.message);
        alert('Failed to summarize text. Please try again.');
    }
}

async function suggestion() {
    try {
        const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
        const [{result}] = await chrome.scripting.executeScript({
            target: {tabId: tab.id},
            func: () => {
                const selection = window.getSelection();
                return selection.toString();
            }
        });

        if (!result) {
            alert('Please select some text to suggest.');
            return;
        }

        const response = await fetch('http://localhost:12345/api/research/process', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: result,
                operation: 'Suggest'
            })
        });

        if (!response.ok) {
            throw new Error('API Error: ' + response.statusText);
        }

        const data = await response.json();
        showResult(data.result.replace(/\n/g, '<br>'));

    }
    catch(error) {
        showResult('Error: ' + error.message);
        alert('Failed to provide suggestion. Please try again.');
    }
}

async function saveNotes() {
    const notes = document.getElementById('notes').value;
    await chrome.storage.local.set({researchNotes: notes});
    alert('Notes saved successfully!');
}

async function showResult(content) {
     document.getElementById('results').innerHTML = 
     `<div class ="result-item">
        <div class="result-content">
            ${content}
        </div>
     </div>`;
}