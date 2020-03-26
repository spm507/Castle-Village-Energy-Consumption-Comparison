This is a map displaying the energy consumption of Castle Village and comparing it with similar properties

var hoveredFeature = features[0]
var featureInfo = `
  <h4>${hoveredFeature.properties.PropertyName}</h4>
  <p><strong>Picture:</strong> ${hoveredFeature.properties.Picture}</p>
  <p><strong>Address:</strong> ${hoveredFeature.properties.Address}</p>
  <p><strong>Borough:</strong> ${hoveredFeature.properties.Borough}</p>
  <p><strong>website:</strong> ${hoveredFeature.properties.website}</p>
  <p><strong>Year Built:</strong> ${hoveredFeature.properties.YearBuilt}</p>
  <p><strong> ENERGY STAR Score:</strong> ${hoveredFeature.properties.Score}</p>
  <p><strong>Self-Reported Gross Floor Area (ft²):</strong> ${hoveredFeature.properties.FloorArea}</p>
  <p><strong>Natural Gas Use (kBtu):</strong> ${hoveredFeature.properties.Gas}</p>
  <p><strong>Electricity Use - Grid Purchase (kWh):</strong> ${hoveredFeature.properties.Electricity}</p>
  <p><strong>Total GHG Emissions (Metric Tons CO2e):</strong> ${hoveredFeature.properties.Emissions}</p>
