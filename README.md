# PartPlanner

A PC part management dashboard for builders

## Product Specification

### The Idea

A digital platform for users to manage the inventory of their pc parts and understand the costs that are put into
creating an overall build.

### What makes us different?

Instead of focusing on finding PC parts, this solution focuses on the insight and management of existing ones.

### Who are our competitors?

PCPartpicker

### How can we win?

PCPartPicker has support for managing existing PC parts, however, it is extremely bare and doesn’t provide a useful
insight into a user’s budgeting and planning of builds. This leads flippers and tech enthusiasts to typically use
software such as Excel or Google Sheets to make up for this problem.

PCPartPicker is superior in its ability to analyse a build’s compatibility, however, if we ignore this factor and focus
rather from an inventory management perspective, we could meet an unfilled gap in the market.

## Functionalities

### Sign up flow

* User can create account or login with facebook, twitter, or email

### Inventory System

* Users can view a table containing all of their PC parts
  * Can be filtered
    * Type (gpu, cpu, ram, etc)
    * Brand (Corsair, Cooler Master, MSI, etc)
    * Whether part is in an existing build or available
  * Can be sorted
    * Cost
    * Name
    * Purchase date
  * PC parts can be selected and viewed
* Users can add PC Parts
  * Input fields
    * Type (gpu, cpu, ram, etc)
    * Cost
    * Type dependant specs (memory, tdp, etc)
    * Brand (Corsair, Cooler Master, MSI, etc)
    * Purchase date
    * Condition
    * Stock count
  * Can be assigned to a build
* Users can create PC Builds
  * Can be a plan or a build
    * A plan can be made with possible part combinations that do not necessarily need to be available.
    * A build requires the user to have the selected parts in inventory to be finalised.
  * Parts can be added to the build from the user’s inventory

## Design
[Figma](https://www.figma.com/file/sHO140XGrCqE0GH5w90xDV/PartPlanner?node-id=0%3A1)

## Development

### Install the dependencies

```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn lint
```

### Format the files

```bash
yarn format
```

### Build the app for production

```bash
quasar build
```
