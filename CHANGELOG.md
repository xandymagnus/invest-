# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project follows Semantic Versioning.

## [Unreleased]

### Changed
- Replaced the transaction list with a table-based layout.
- Modernized the application interface and improved its visual presentation.
- Refactored transaction rendering to create individual table rows (`tr`) within the table body (`tbody`), allowing each transaction to be independently accessed and manipulated.

## [0.1.0] - Unreleased

### Added
- Initial HTML and CSS structure.
- Basic income and expense input.
- Transaction date display.
- Basic balance calculation.
- JavaScript ES Modules.
- MVC-inspired project organization.
- Initial project documentation.

### Changed
- Separated application responsibilities into Models, Views, Controllers, and Utils.