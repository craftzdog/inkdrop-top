import './pricing-why-a-subscription.less'
import React from 'react'
import OutboundLink from './outbound-link'
import SectionSecond, { Callout } from './section-second'

const SectionWhySubscription = () => {
  return (
    <SectionSecond id="pricing-why">
      <h2>Why this pricing</h2>
      <div className="ui two column stackable grid">
        <div className="row">
          <div className="column">
            <h3>Why a subscription?</h3>
            <p>
              Because lifetime pricing is not sustainable. We know there are
              similar apps with lifetime pricing out there, but it doesn&apos;t
              work for long-running business. The sustainability is crucial
              especially for note-taking apps because you will store a lot of
              notes in them day by day.
            </p>
          </div>
          <div className="column">
            <h3>$5 per month is too expensive.</h3>
            <p>
              It is for professional use, not targeted to the mass of people. We
              believe it would improve your productivity worth more than $5.
              This is the price we would pay as a user.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <h3>If lowered the pricing, you would get more customers.</h3>
            <p>
              We would like to provide good, quick and warm user support. If we
              got a lot of users, we won&apos;t be able to support them all.
            </p>
          </div>
        </div>
      </div>
      <Callout>
        <p>
          If you are curious about our pricing, please read{' '}
          <OutboundLink href="https://blog.inkdrop.app/why-inkdrop-is-a-subscription-app-beda29c507d5">
            my blog post
          </OutboundLink>{' '}
          for more detail.
        </p>
      </Callout>
    </SectionSecond>
  )
}

export default SectionWhySubscription
