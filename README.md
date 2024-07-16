# Salesforce DX Project: Next Steps

Now that you’ve created a Salesforce DX project, what’s next? Here are some documentation resources to get you started.

## How Do You Plan to Deploy Your Changes?

Do you want to deploy a set of changes, or create a self-contained application? Choose a [development model](https://developer.salesforce.com/tools/vscode/en/user-guide/development-models).

## Configure Your Salesforce DX Project

The `sfdx-project.json` file contains useful configuration information for your project. See [Salesforce DX Project Configuration](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm) in the _Salesforce DX Developer Guide_ for details about this file.

## Read All About It

- [Salesforce Extensions Documentation](https://developer.salesforce.com/tools/vscode/)
- [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
- [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)
- [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)

## How to create a scratch org?
- You can create a scratch org from vscode by assigning it the package-scratch-def file.
## SFDX Commands

- To give a list of orgs your vscode is connected with - [sf org list]
- To open a org from vscode - [sf org open]
- [sf project retrieve preview] - it would give a list of files the project retrieve command would pull down if you ran it
- [sf project retrieve start] - This will actually pull down all the files from your org into your vscode project
- [sf project deploy preview]
- [sf project deploy start] - This will deploy everything in your vscode project to your scratch/dev org
- ** .forceignore - we mention all the things that needs to be ignore while deploy/retrieve from scratch orgs.
- we can preview our LWC Components before we deploy to Salesforce org - (https://developer.salesforce.com/tools/vscode/en/localdev/set-up-lwc-local-dev)