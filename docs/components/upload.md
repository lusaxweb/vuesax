---
API:
 - name: action
   type: String
   parameters: null
   description: determines the url of the server where the request is made.
   default: null
 - name: text
   type: String
   parameters: null
   description: Change the text shown in the input.
   default: 'Upload File'
 - name: limit
   type: Number
   parameters: null
   description: Limit the number of files that can be added.
   default: null
 - name: headers
   type: Object
   parameters: null
   description: Change the header of the request to the server.
   default: null
 - name: data
   type: Object
   parameters: null
   description: Appends data to the form.
   default: null
 - name: fileName
   type: String
   parameters: null
   description: Key name of the files sent.
   default: null
 - name: multiple
   type: Boolean
   parameters: null
   description: Determines whether multiple files can be selected.
   default: false
 - name: accept
   type: File types
   parameters: null
   description: change the types of files allowed.
   default: all
 - name: disabled
   type: Boolean
   parameters: null
   description: disables the component, making it impossible to add any file.
   default: false
 - name: on-success
   type: Function
   parameters: (event)
   description: callback function when successfully uploading the file.
   default: null
 - name: on-delete
   type: Function
   parameters: (event)
   description: callback function when delete item the file.
   default: null
 - name: on-error
   type: Function
   parameters: (event)
   description: callback function when an error occurs when trying to upload a file.
   default: null
 - name: automatic
   type: Boolean
   parameters:
   description: It determines if the shipment is automatic when making a change of value.
   default: false
 - name: show-upload-button
   type: Boolean
   parameters:
   description: It determines whether to show the upload button or not.
   default: true
 - name: single-upload
   type: Boolean
   parameters:
   description: This causes each file to be sent separately on each request. Only used when multiple prop is true
   default: false
---

# Upload

<box header>

  Upload images easily and with a nice effect

</box>


<box>

## Default

You can upload files to the server with the `vs-upload` component, the requested parameter is `action` which is the URL of the server

<vuecode md>
<div slot="demo">
  <Demos-Upload-Default />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-upload action="https://jsonplaceholder.typicode.com/posts/" @on-success="successUpload" />
  </div>
</template>

<script>
export default {
  methods:{
    successUpload(){
      this.$vs.notify({color:'success',title:'Upload Success',text:'Lorem ipsum dolor sit amet, consectetur'})
    }
  }
}
</script>
```

</div>
</vuecode>
</box>

<box>

## Multiple

You can upload multiple files by adding the `multiple` property within the component.

<vuecode md>
<div slot="demo">
  <Demos-Upload-Multiple />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-upload multiple text="Upload Multiple" action="https://jsonplaceholder.typicode.com/posts/" @on-success="successUpload" />
  </div>
</template>

<script>
export default {
  methods:{
    successUpload(){
      this.$vs.notify({color:'success',title:'Upload Success',text:'Lorem ipsum dolor sit amet, consectetur'})
    }
  }
}
</script>
```

</div>
</vuecode>
</box>


<box>

## Automatic

You can enable automatic submission with the `Automatic` property that executes the shipment by changing the value of the` input`

<vuecode md>
<div slot="demo">
  <Demos-Upload-Automatic />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-upload automatic action="https://jsonplaceholder.typicode.com/posts/" @on-success="successUpload" />
  </div>
</template>

<script>
export default {
  methods:{
    successUpload(){
      this.$vs.notify({color:'success',title:'Upload Success',text:'Lorem ipsum dolor sit amet, consectetur'})
    }
  }
}
</script>
```

</div>
</vuecode>
</box>
