const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs/promises');

async function run() {
	const path = core.getInput('json-path');
	try {
		const data = await fs.readFile(path, { encoding: 'utf8' });
		const info = JSON.parse(data);
		core.setOutput("recipe_id", info.installed.recipe.id);
		core.setOutput("package_id", info.installed.packages[0].id);
		core.setOutput("root_path", info.installed.packages[0].cpp_info.rootpath);
		core.setOutput("version", info.installed.packages[0].cpp_info.version);
	} 
	catch(error) {
		core.setFailed(error.message);
	}
}

run()
