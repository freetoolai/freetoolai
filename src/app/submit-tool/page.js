"use client";

import { useState } from 'react';
import { Upload, CheckCircle, Rocket, Globe, Tag } from 'lucide-react';
import Button from '@/components/ui/Button';
import { categories } from '@/lib/mockData';
import styles from './page.module.css';
import clsx from 'clsx';

export default function SubmitToolPage() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        url: '',
        category: '',
        description: '',
        pricing: 'Free'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate
        if (!formData.name || !formData.url) return;

        // Simulate API
        setTimeout(() => {
            setStep(2);
        }, 1000);
    };

    if (step === 2) {
        return (
            <div className={styles.wrapper}>
                <div className="container">
                    <div className={styles.successWrapper}>
                        <div className="animate-bounce-in">
                            <CheckCircle size={80} color="#10B981" style={{ margin: '0 auto' }} />
                        </div>
                        <h1 className={styles.successTitle}>Submission Received!</h1>
                        <p className={styles.successText}>
                            Thank you for submitting <strong>{formData.name}</strong>. <br />
                            Our team will verify your tool within 48 hours.
                        </p>
                        <Button href="/" variant="primary" size="large">Return Home</Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.heroWrapper}>
                <div className="container">
                    <h1 className={styles.title}>Submit a New Tool</h1>
                    <p className={styles.subtitle}>
                        Join the world's largest AI directory. Get discovered by thousands of users daily.
                    </p>
                </div>
            </div>

            <div className={styles.container}>
                <form onSubmit={handleSubmit} className={styles.glassForm}>
                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}><Rocket size={20} className="text-emerald-400" /> Tool Details</h3>
                        <div className={clsx(styles.fieldGroup, styles.twoCol)}>
                            <div>
                                <label className={styles.label}>Tool Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="e.g. Midjourney"
                                    className={styles.input}
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label className={styles.label}>Website URL *</label>
                                <input
                                    type="url"
                                    name="url"
                                    required
                                    placeholder="https://example.com"
                                    className={styles.input}
                                    value={formData.url}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}><Tag size={20} className="text-blue-400" /> Category & Content</h3>
                        <div className={styles.fieldGroup}>
                            <label className={styles.label}>Category *</label>
                            <select
                                name="category"
                                required
                                className={styles.select}
                                value={formData.category}
                                onChange={handleChange}
                            >
                                <option value="">Select a category</option>
                                {categories.map(c => (
                                    <option key={c.id} value={c.id}>{c.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className={styles.fieldGroup}>
                            <label className={styles.label}>Short Description</label>
                            <textarea
                                name="description"
                                placeholder="Briefly describe what your tool does..."
                                className={styles.textarea}
                                value={formData.description}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}><Globe size={20} className="text-purple-400" /> Pricing & Assets</h3>
                        <div className={styles.fieldGroup}>
                            <label className={styles.label}>Pricing Model</label>
                            <div className={styles.radioGroup}>
                                {['Free', 'Freemium', 'Paid'].map((p) => (
                                    <label key={p} className={styles.radioLabel}>
                                        <input
                                            type="radio"
                                            name="pricing"
                                            value={p}
                                            checked={formData.pricing === p}
                                            onChange={handleChange}
                                            className={styles.radioInput}
                                        />
                                        <span className={styles.radioText}>{p}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className={styles.fieldGroup}>
                            <label className={styles.label}>Upload Logo (Optional)</label>
                            <div className={styles.fileUpload}>
                                <Upload size={32} />
                                <span style={{ fontSize: '14px' }}>Drag & drop or click to upload</span>
                                <span style={{ fontSize: '12px', opacity: 0.7 }}>JPG, PNG up to 2MB</span>
                            </div>
                        </div>
                    </div>

                    <Button type="submit" size="large" className={styles.submitBtn}>
                        Submit for Review
                    </Button>
                </form>
            </div>
        </div>
    );
}
