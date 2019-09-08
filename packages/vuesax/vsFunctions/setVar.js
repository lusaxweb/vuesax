const setVar = (propertyName, value, el) => {
  if (!el) {
    document.documentElement.style.setProperty(`--vs-${propertyName}`, value)
  } else {
    el.style.setProperty(`--vs-${propertyName}`, value)
  }
}

export default setVar
