import * as React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const Usage = () => (
  <ExampleSection title="Usage">
    <ComponentExample
      title="Color"
      description="A status can have colors."
      examplePath="components/Status/Usage/StatusColorExample"
    />
    <ComponentExample
      title="Icon"
      description="A status can have an icon."
      examplePath="components/Status/Usage/StatusIconExample"
    />
    <ComponentExample
      title="Custom"
      description="A status can be used to show different colors and icons."
      examplePath="components/Status/Usage/StatusCustomExample"
    />
  </ExampleSection>
)

export default Usage