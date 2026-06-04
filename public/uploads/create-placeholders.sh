#!/bin/bash
# Create placeholder for Farms
convert -size 1200x630 -background "#2D5016" -fill white -gravity center \
  -pointsize 48 -font "Helvetica-Bold" \
  label:"Olive Farm\nSatellite Monitoring\n\nfarms.daniele.is" \
  farms-dashboard.png

# Create placeholder for n8n
convert -size 1200x630 -background "#EA4B71" -fill white -gravity center \
  -pointsize 48 -font "Helvetica-Bold" \
  label:"n8n Workflow\nShopify → Bokio\nAutomation" \
  n8n-workflow.png

echo "Placeholders created"
