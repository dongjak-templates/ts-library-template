import path from 'path'
import fs from 'fs'
import Handlebars from 'handlebars'

// 获取当前命令行上下文路径
const currentDirectory = process.cwd();
// 获取 package.json 文件中的内容
const packageJsonPath = path.join(currentDirectory, 'package.json');
const packageJsonFile = fs.readFileSync(packageJsonPath, 'utf8');
const viteConfigPath = path.join(currentDirectory, 'vite.config.ts');
const viteConfigFile =  fs.readFileSync(viteConfigPath, 'utf8');
const preReleaseJsPath = path.join(currentDirectory, '.github/scripts/pre-release.js');
const preReleaseJsFile =  fs.readFileSync(preReleaseJsPath, 'utf8');
const packageJsonTemplate = Handlebars.compile(packageJsonFile);
const viteConfigTemplate = Handlebars.compile(viteConfigFile);
const preReleaseJsTemplate = Handlebars.compile(preReleaseJsFile);

const data = {
    repo_name: process.argv[2],
    author: process.argv[3],
    repo_url    : process.argv[4],


};
const output = packageJsonTemplate(data);
const output2 = viteConfigTemplate(data);
const output3 = preReleaseJsTemplate(data);
fs.writeFileSync(packageJsonPath, output);
fs.writeFileSync(viteConfigPath, output2);
fs.writeFileSync(preReleaseJsPath, output3);
