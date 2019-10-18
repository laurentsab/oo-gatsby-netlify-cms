import React from 'react'
import PropTypes from 'prop-types'
import { AProposTemplate } from '../../templates/a-propos'

const AProposPreview = ({ entry, widgetFor }) => (
  <AProposTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

AProposPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AProposPreview
