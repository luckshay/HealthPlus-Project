const { PythonShell } = require('python-shell');

exports.analysis = async (req, res) => {
    try {
        let options = {
            mode: 'text',
            pythonOptions: ['-u'], // unbuffered output
            scriptPath: 'src/python', // path to the Python script
            args: []
        };
        
        // Wrap the PythonShell.run() method in a Promise
        PythonShell.run('compStatsScript.py', options).then(result =>{
            const counts = JSON.parse(result.toString().replace(/'/g, '"'));
            return res.json(counts);
        });
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Something Went Wrong'});
    }
};
