/**
	Copyright (c) 2016 Adobe Systems Incorporated. All rights reserved.

	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

	http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.
 */

var Q = require('q');
var platformRequire = require('../utils/platformRequire');
var project = require('./project');

module.exports = run;

function run(opts) 
{
	return project.projectRootPath()
	.then( () => {
		var platformRun = platformRequire("run", opts.platforms[0]);

		// We don't want to kill the process after run returns
		opts.killProcessAfterCommand = false;
		
		return platformRun(opts);
	});
}

