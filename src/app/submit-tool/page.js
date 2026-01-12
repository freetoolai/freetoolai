"use client";

import { useState } from 'react';
import { Upload, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import { categories } from '@/lib/mockData';
import styles from './page.module.css';

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
            <div className="container">
                <div className={styles.successWrapper}>
                    <CheckCircle size={64} color="#10b981" />
                    <h1 className={styles.successTitle}>Submission Received!</h1>
                    <p className={styles.successText}>
                        Thank you for submitting <strong>{formData.name}</strong>. We will review it within 48 hours.
                    </p>
                    <Button href="/" variant="primary">Return Home</Button>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Submit a New Tool</h1>
                    <p className={styles.subtitle}>Get your AI tool in front of thousands of users. It's free!</p>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                    {/* Section 1 */}
                    <div className={styles.formGroup}>
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

                    <div className={styles.formGroup}>
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

                    <div className={styles.formGroup}>
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

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Short Description</label>
                        <textarea
                            name="description"
                            placeholder="Briefly describe what your tool does..."
                            className={styles.textarea}
                            rows={3}
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={styles.formGroup}>
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
                                    />
                                    {p}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Upload Logo (Optional)</label>
                        <div className={styles.fileUpload}>
                            <Upload size={20} />
                            <span>Drag & drop or click to upload</span>
                        </div>
                    </div>

                    <Button type="submit" variant="primary" size="large" className={styles.submitBtn}>
                        Submit for Review
                    </Button>
                </form>
            </div>
        </div>
    );
}
