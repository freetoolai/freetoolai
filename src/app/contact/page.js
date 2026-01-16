"use client";

import { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import styles from './page.module.css';

export default function ContactPage() {
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setTimeout(() => {
                setStatus('idle');
                e.target.reset();
            }, 3000);
        }, 1500);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.hero}>
                <h1 className={styles.title}>Get in Touch</h1>
                <p className={styles.subtitle}>Have questions or feedback? We'd love to hear from you.</p>
            </div>

            <div className={styles.container}>
                <div className={styles.infoCard}>
                    <div className={styles.infoItem}>
                        <div className={styles.infoIcon}><Mail size={24} /></div>
                        <div>
                            <span className={styles.infoLabel}>Email Us</span>
                            <span className={styles.infoValue}>support@freetool.ai</span>
                        </div>
                    </div>
                    <div className={styles.infoItem}>
                        <div className={styles.infoIcon}><MapPin size={24} /></div>
                        <div>
                            <span className={styles.infoLabel}>Office</span>
                            <span className={styles.infoValue}>123 AI Boulevard<br />San Francisco, CA 94103</span>
                        </div>
                    </div>
                    <div className={styles.infoItem}>
                        <div className={styles.infoIcon}><Phone size={24} /></div>
                        <div>
                            <span className={styles.infoLabel}>Phone</span>
                            <span className={styles.infoValue}>+1 (555) 123-4567</span>
                        </div>
                    </div>
                </div>

                <div className={styles.formCard}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Name</label>
                            <input type="text" className={styles.input} placeholder="Your name" required disabled={status === 'loading'} />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Email</label>
                            <input type="email" className={styles.input} placeholder="name@company.com" required disabled={status === 'loading'} />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Message</label>
                            <textarea className={styles.textarea} rows={4} placeholder="How can we help?" required disabled={status === 'loading'}></textarea>
                        </div>
                        <button
                            type="submit"
                            className={styles.submitBtn}
                            disabled={status === 'loading' || status === 'success'}
                            style={{ opacity: status === 'loading' ? 0.7 : 1 }}
                        >
                            {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
