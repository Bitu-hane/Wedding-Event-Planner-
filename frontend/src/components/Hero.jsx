import React, { useState, useEffect } from 'react';
import { usePlanner } from '../context/PlannerContext';
import { Calendar, MapPin, Sparkles, Heart } from 'lucide-react';

export default function Hero() {
  const { eventDetails } = usePlanner();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(eventDetails.weddingDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [eventDetails.weddingDate]);

  return (
    <div className="glass-card animate-fade-in" style={{
      marginBottom: '2rem',
      background: 'linear-gradient(135deg, rgba(30, 34, 48, 0.9) 0%, rgba(20, 23, 33, 0.95) 100%)',
      position: 'relative',
      overflow: 'hidden',
      padding: '2.5rem 2rem',
      border: '1px solid rgba(230, 197, 148, 0.25)'
    }}>
      {/* Decorative Gold Accent Circle */}
      <div style={{
        position: 'absolute',
        top: '-60px',
        right: '-60px',
        width: '240px',
        height: '240px',
        background: 'radial-gradient(circle, rgba(230, 197, 148, 0.12) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '2rem'
      }}>
        {/* Event Meta info */}
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#e6c594', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
            <Sparkles size={16} />
            <span>The Big Day Countdown</span>
          </div>

          <h2 style={{ fontSize: '2.4rem', color: '#ffffff', marginBottom: '0.75rem' }}>
            {eventDetails.coupleNames}
          </h2>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', color: '#a0aab8', fontSize: '0.95rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Calendar size={18} color="#e6c594" />
              <span>{new Date(eventDetails.weddingDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <MapPin size={18} color="#e6c594" />
              <span>{eventDetails.venue}, {eventDetails.city}</span>
            </div>
          </div>
        </div>

        {/* Dynamic Countdown Tiles */}
        <div style={{ display: 'flex', gap: '0.85rem' }}>
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds }
          ].map((unit, idx) => (
            <div key={idx} style={{
              background: 'rgba(15, 17, 23, 0.75)',
              border: '1px solid rgba(230, 197, 148, 0.2)',
              borderRadius: '14px',
              padding: '0.85rem 1.1rem',
              textAlign: 'center',
              minWidth: '75px'
            }}>
              <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#e6c594', fontFamily: 'var(--font-serif)', lineHeight: 1.1 }}>
                {String(unit.value).padStart(2, '0')}
              </div>
              <div style={{ fontSize: '0.7rem', color: '#8c95a6', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '0.2rem' }}>
                {unit.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
