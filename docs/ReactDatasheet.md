<!-- $theme: gaia -->
<!-- *template: gaia -->

React datasheet
===

##### A simple react component to create a spreadsheet.

---

# ![](img/createCollector.png)

---

# ![](img/soManyCollectors.png)

---

# ![](img/reactDatasheet.png)

---

# Features

- Select cells, copy-paste cells
- Navigation using keyboard keys
- Deletion using keyboard keys

---

# Features

- Callbacks for 
	1. onCellsChanged
	2. valueRenderer (visible data)
	3. dataRenderer (underlying data in the input, takes the value by default)

---

# Basic Usage

```js
const grid = [
  [{value: 1}, {value: 3}],
  [{value: 2}, {value: 4}]
]

<ReactDataSheet
  data={grid}
  valueRenderer={(cell) => cell.value}
  onCellsChanged={onCellsChanged}
/>
```

---

# Cells with underlying data

```js
const grid = [
   [{value: 5}, {value: 5, expr: '1 + 4'}],
   [{value: 6}, {value: 6, expr: '2 + 4'}]
]

<ReactDataSheet
  data={grid}
  valueRenderer={(cell) => cell.value}
  dataRenderer={(cell) => cell.expr}
  onCellsChanged={onCellsChanged}
/>
```

---

# Cells with underlying component

```js
const grid = [
   [{
    value:  5,
    component: (<button> Button </button>)
    }]
]

<ReactDataSheet
  data={grid}
  valueRenderer={(cell) => cell.value}
/>
```

---

# Cells with extra attributes

```js
const grid = [
  [{value: 1, attr: {color: 'red'}},{value: 3}],
  [{value: 2}, {value: 4}]
]

<ReactDataSheet
  data={grid}
  valueRenderer={(cell) => cell.value}
  attributesRenderer={
    (cell) => { return {'style': cell.attr || {}} }
  }
  ...
/>
```

---

# Custom renderers
- sheetRenderer
- rowRenderer
- cellRenderer
- valueViewer
- dataEditor
- and more ...

---