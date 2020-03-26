This is a map displaying the energy consumption of Castle Village and comparing it with similar properties


"PropertyName": "Castle Village", "Address" : "110-200 Cabrini Blvd.", "Borough":"Manhattan", "website" : "http://www.castlevillage.com/?src=habitatmag.com", "Self-Reported Gross Floor Area (ft²)" : "890130", "YearBuilt": "1939", "ENERGYSTAR Score": "35", "Natural Gas Use (kBtu)": "15770791.1", "Electricity Use - Grid Purchase (kWh)" : "1871582.3", "Total GHG Emissions (Metric Tons CO2e)" : "4576.8", "Picture" :"https://upload.wikimedia.org/wikipedia/commons/f/f1/CastleVillage.Manhattan_crop.jpg"

"PropertyName": "London Terrace Towers", "Address": "465 West 23rd Street", "Borough":"Manhattan", "website" : "https://londonterracetowers.com/", "Self-Reported Gross Floor Area (ft²)" : "685775", "YearBuilt": "1932", "ENERGYSTAR Score": "41", "Natural Gas Use (kBtu)": "36519653.1", "Electricity Use - Grid Purchase (kWh)" : "5103072.6", "Total GHG Emissions (Metric Tons CO2e)" : "3414.3", "Picture" :"https://upload.wikimedia.org/wikipedia/commons/9/99/London_Terrace.jpg"}

"PropertyName": "London Terrace Gardens", "Address": "410-470 West 24th Street", "Borough":"Manhattan", "website" : "https://www.rosenyc.com/rentals/london-terrace-gardens/", "Self-Reported Gross Floor Area (ft²)" : "690775", "YearBuilt": "1932", "ENERGYSTAR Score": "56", "Natural Gas Use (kBtu)": "37825148.8", "Electricity Use - Grid Purchase (kWh)" : "5103072.6", "Total GHG Emissions (Metric Tons CO2e)" : "3483.7", "Picture" :"https://clients-spherexxcom.netdna-ssl.com/common/dynamic.asp?p=/common/uploads/www_londonterrace_com/property_photos/1786-pho-02.jpg"}


"PropertyName": "Boulevard Gardens", "Address":"54-17 31st Avenue", "Borough":"Queens", "website" : "https://boulevardgardens.nyc/", "Self-Reported Gross Floor Area (ft²)" : "624000", "YearBuilt": "1935", "ENERGYSTAR Score": "46", "Natural Gas Use (kBtu)": "55861985.9", "Electricity Use - Grid Purchase (kWh)" : "3558950.8", "Total GHG Emissions (Metric Tons CO2e)" : "4057", "Picture" :"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Boulevard_Gardens_2.jpg/1200px-Boulevard_Gardens_2.jpg"}

"PropertyName": "100 Barclay Street", "Address": "100 Barclay Street", "Borough":"Manhattan", "website" : "https://100barclay.com/", "Self-Reported Gross Floor Area (ft²)" : "978706", "YearBuilt": "1930", "ENERGYSTAR Score": "44", "Natural Gas Use (kBtu)": "6757746.8", "Electricity Use - Grid Purchase (kWh)" : "24501011.5", "Total GHG Emissions (Metric Tons CO2e)" : "7438.8", "Picture" :"https://tribecacitizen.com/wp-content/uploads/2017/06/100-Barclay.jpg"}

var hoveredFeature = features[0]
var featureInfo = `
  <h4>${hoveredFeature.properties.PropertyName}</h4>
  <p><strong>Picture:</strong> ${hoveredFeature.properties.Picture}</p>
  <p><strong>Address:</strong> ${hoveredFeature.properties.Address}</p>
  <p><strong>Borough:</strong> ${hoveredFeature.properties.Borough}</p>
  <p><strong>website:</strong> ${hoveredFeature.properties.website}</p>
  <p><strong>Year Built:</strong> ${hoveredFeature.properties.YearBuilt}</p>
  <p><strong>ENERGYSTAR Score:</strong> ${hoveredFeature.properties.ENERGYSTARScore}</p>
  <p><strong>Self-Reported Gross Floor Area (ft²):</strong> ${hoveredFeature.properties.Self-ReportedGrossFloorArea(ft²)}</p>
  <p><strong>Natural Gas Use (kBtu):</strong> ${hoveredFeature.properties.Natural Gas Use (kBtu)}</p>
  <p><strong>Electricity Use - Grid Purchase (kWh):</strong> ${hoveredFeature.properties.Electricity Use - Grid Purchase (kWh)}</p>
  <p><strong>Total GHG Emissions (Metric Tons CO2e):</strong> ${hoveredFeature.properties.Total GHG Emissions (Metric Tons CO2e)}</p>
