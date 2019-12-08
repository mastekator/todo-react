import React from 'react';
import Layout from "./hoc/Layout/Layout";
import Tasks from "./containers/Tasks/Tasks";

function App() {
    return (
        <div className="App">
            <Layout>
                <Tasks>

                </Tasks>
            </Layout>
        </div>
    );
}

export default App;
