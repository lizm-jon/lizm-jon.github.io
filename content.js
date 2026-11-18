/* Edit project facts and both language versions here. */
window.PROJECTS = [
  {
    id: 'nabench', year: '2026', name: 'NABench', visual: 'nabench',
    subtitle: 'Large-Scale Benchmarks of Nucleotide Foundation Models for Fitness Prediction',
    badge: {en: 'Featured research', zh: '重点研究'},
    description: {
      en: 'A systematic evaluation of nucleotide foundation models for fitness prediction. Spanning 21 models, 47 assay datasets, and 539,000 mutants, NABench examines performance across zero-shot, cross-validation, few-shot, and transfer learning settings.',
      zh: '面向适应度预测，系统评测核苷酸基础模型。NABench 覆盖 21 个模型、47 个测定数据集和 53.9 万个突变体，考察 zero-shot、cross-validation、few-shot 与 transfer learning 四类设置下的模型表现。'
    },
    sections: [
      {title: {en: 'The research question', zh: '研究问题'}, text: {en: 'How well do nucleotide foundation models predict experimentally measured sequence function? NABench brings models and assay datasets into a shared benchmark to examine their capabilities across different learning settings.', zh: '核苷酸基础模型能在多大程度上预测实验测量的序列功能？NABench 将不同模型与测定数据集纳入统一基准，考察模型在多种学习设置下的能力。'}},
      {title: {en: 'Benchmark scope', zh: '评测规模'}, text: {en: '21 models · 47 assay datasets · approximately 539,000 mutants. Fitness refers to the measured functional outcome of a sequence in its particular assay; its meaning depends on the experiment.', zh: '21 个模型、47 个测定数据集、约 53.9 万个突变体。适应度指序列在特定测定中的功能表现，其具体含义取决于实验任务。'}},
      {title: {en: 'Four evaluation settings', zh: '四类评测设置'}, items: {
        en: ['Zero-shot: examine the predictive information available from a pretrained model without task-specific labeled training.', 'Cross-validation: evaluate supervised prediction across held-out folds.', 'Few-shot: investigate prediction when only a small amount of labeled data is available.', 'Transfer learning: examine how learned information transfers between tasks or datasets.'],
        zh: ['Zero-shot：在不使用任务特定标注数据进行训练的条件下，考察预训练模型提供的预测信息。', 'Cross-validation：通过留出折评估监督预测表现。', 'Few-shot：考察仅有少量标注数据时的预测能力。', 'Transfer learning：考察已有知识在不同任务或数据集之间的迁移能力。']
      }},
      {title: {en: 'Why this work matters to me', zh: '我的研究兴趣'}, text: {en: 'NABench is the main focus of my research portfolio. I am interested in what these evaluations reveal about biological representations, data efficiency, and the limits of generalization.', zh: 'NABench 是我研究经历中的重点。我尤其关注这些评测能够揭示怎样的生物表征、数据效率，以及模型泛化能力的边界。'}}
    ], links: []
  },
  {
    id: 'vcworld', year: '2026', name: 'VCWorld', visual: 'vcworld',
    subtitle: 'A Biological World Model for Virtual Cell Simulation',
    badge: {en: 'ICLR 2026 · Poster', zh: 'ICLR 2026 · Poster'},
    description: {en: 'A cell-level simulator that combines structured biological knowledge with language model reasoning to predict drug perturbation responses and generate interpretable mechanistic hypotheses.', zh: '结合结构化生物知识与大语言模型推理的细胞级模拟器，用于预测药物扰动响应，并生成可解释的机制假设。'},
    authors: ['Zhijian Wei', 'Runze Ma', 'Zichen Wang', 'Zhongmin Li', 'Shuotong Song', 'Shuangjia Zheng'],
    sections: [
      {title: {en: 'Overview', zh: '工作概览'}, text: {en: 'VCWorld integrates structured biological knowledge with iterative language model reasoning to model how cells respond to drug perturbations. It produces stepwise predictions and explicit mechanistic hypotheses alongside its response predictions.', zh: 'VCWorld 将结构化生物知识与语言模型的迭代推理结合，用于模拟细胞对药物扰动的响应。模型在预测响应的同时，生成逐步推理和明确的机制假设。'}},
      {title: {en: 'Publication', zh: '发表信息'}, text: {en: 'Accepted as a poster at ICLR 2026. I contributed as a co-author; my primary research focus on this website is NABench.', zh: '该工作被 ICLR 2026 接收为 Poster。我作为共同作者参与此项研究；本主页重点介绍的研究经历为 NABench。'}}
    ],
    links: [{label: {en: 'Paper', zh: '论文'}, href: 'https://openreview.net/forum?id=hhq89Hs7T3', icon: 'file-text'}, {label: {en: 'PDF', zh: 'PDF'}, href: 'https://openreview.net/pdf?id=hhq89Hs7T3', icon: 'download'}],
    bibtex: '@inproceedings{wei2026vcworld,\n  title = {{VCWorld}: A Biological World Model for Virtual Cell Simulation},\n  author = {Zhijian Wei and Runze Ma and Zichen Wang and Zhongmin Li and Shuotong Song and Shuangjia Zheng},\n  booktitle = {International Conference on Learning Representations},\n  year = {2026},\n  url = {https://openreview.net/forum?id=hhq89Hs7T3}\n}'
  },
  {
    id: 'efficient-transformers', year: '2025', name: 'Memory-Efficient Transformers', visual: 'transformer',
    subtitle: 'Memory-Efficient Transformer Optimizations for Low-Perplexity Language Modeling',
    badge: {en: 'Johns Hopkins University', zh: 'Johns Hopkins University'},
    description: {en: 'Exploring Qwen3 distillation and memory optimization to reduce the cost of language modeling while maintaining low perplexity. Completed under the supervision of Prof. Daniel Khashabi during my exchange at JHU.', zh: '围绕 Qwen3 探索蒸馏与显存优化，在降低语言建模开销的同时保持较低的困惑度。交换期间在 Daniel Khashabi 老师指导下完成。'},
    sections: [
      {title: {en: 'Research objective', zh: '研究目标'}, text: {en: 'Study the trade-off between language modeling quality and resource use through distillation and memory optimization of Qwen3. The project focuses on perplexity together with memory and computational cost.', zh: '通过对 Qwen3 的蒸馏与显存优化，研究语言建模质量和资源开销之间的权衡，关注困惑度、内存占用与计算成本。'}},
      {title: {en: 'Academic context', zh: '项目背景'}, text: {en: 'Completed during my exchange at Johns Hopkins University, under the supervision of Prof. Daniel Khashabi. The project source is available on GitHub.', zh: '在 Johns Hopkins University 交换期间，在 Daniel Khashabi 老师指导下完成。项目源代码已发布于 GitHub。'}}
    ], links: [{label: {en: 'Code', zh: '代码'}, href: 'https://github.com/lizm-jon/cs601-distillation-project', icon: 'github'}]
  },
  {
    id: 'orion', year: '2024–2025', name: 'OrIon', visual: 'orion',
    subtitle: 'High-throughput structured screening of metagenomic datasets',
    badge: {en: 'PuYuan Future Scholars Program', zh: '溥渊未来学者计划'},
    description: {en: 'A workflow for high-throughput structured screening of metagenomic datasets, completed under Prof. Shuangjia Zheng. This project marked the beginning of my research in computational biology.', zh: '在郑双佳老师指导下完成的高通量结构化筛选宏基因组数据集工作流课题，并通过溥渊未来学者计划结题。这是我探索计算生物学的重要起点。'},
    sections: [
      {title: {en: 'Project overview', zh: '课题概览'}, text: {en: 'OrIon focuses on a structured workflow for screening metagenomic datasets at scale. The project was completed as part of the second cohort of the PuYuan Future Scholars Program at Shanghai Jiao Tong University.', zh: 'OrIon 关注面向大规模宏基因组数据集的结构化筛选工作流，作为上海交通大学第二期溥渊未来学者计划课题完成并结题。'}},
      {title: {en: 'Research trajectory', zh: '研究历程'}, text: {en: 'Working with Prof. Shuangjia Zheng introduced me to biological data and research workflows. After completing the program, I continued working in the group on subsequent research projects.', zh: '在郑双佳老师指导下，我逐步接触生物数据处理与科研工作流。项目结束后，我继续留组参与后续研究。'}}
    ], links: []
  }
];
